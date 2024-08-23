package today.wtfood.server.service;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.member.IMember;
import today.wtfood.server.dto.recipe.RecipeDetail;
import today.wtfood.server.dto.recipe.RecipeDto;
import today.wtfood.server.dto.recipe.RecipeSummary;
import today.wtfood.server.entity.Member;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.exception.UnauthorizedException;
import today.wtfood.server.repository.MemberRepository;
import today.wtfood.server.repository.RecipeRepository;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.TemporalAdjusters;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class RecipeService {

    private final RecipeRepository rr;
    private final MemberRepository mr;

    public RecipeService(RecipeRepository rr, MemberRepository mr) {
        this.rr = rr;
        this.mr = mr;
    }

    // 레시피 생성
    public Recipe createRecipe(RecipeDto recipe) {
        return rr.save(recipe.toEntity());
    }

    // 레시피 리스트 (페이지네이션)
    public Page<RecipeSummary> getRecipeList(Pageable pageable) {
        return rr.findAllBy(pageable);
    }

    // 모든 레시피 조회
    public List<Recipe> getRecipeList() {
        return rr.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    // ID로 레시피 조회
    public RecipeDetail getRecipeById(long id) {
        return rr.findDetailById(id)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "id"));
    }

    public Page<Recipe> searchRecipes(String title, String category, String description, String hashtag, Pageable pageable) {
        return rr.searchRecipes(title, category, description, hashtag, pageable);
    }

    // 조회수
    @Transactional
    public void incrementViewCount(Long id) {
        Recipe recipe = rr.findById(id)
                .orElseThrow(() -> new NotFoundException("Recipe not found with id " + id));
        recipe.setViewCount(recipe.getViewCount() + 1);
        rr.save(recipe);
    }


    // 레시피 수정
    @Transactional
    public void updateRecipe(long id, Recipe updatedRecipe) {
        Recipe recipe = rr.findById(id)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "id"));

        recipe.setTitle(updatedRecipe.getTitle());
        recipe.setDescription(updatedRecipe.getDescription());
        recipe.setBannerImage(updatedRecipe.getBannerImage());
        recipe.setCookingTime(updatedRecipe.getCookingTime());
        recipe.setServings(updatedRecipe.getServings());
        recipe.setLevel(updatedRecipe.getLevel());
        recipe.setVideoLink(updatedRecipe.getVideoLink());
        recipe.setCategory(updatedRecipe.getCategory());
        recipe.setIngredientImage(updatedRecipe.getIngredientImage());
        recipe.setIngredients(updatedRecipe.getIngredients());
        recipe.setCookingTools(updatedRecipe.getCookingTools());
        recipe.setGuideLinks(updatedRecipe.getGuideLinks());
        recipe.setCookingStep(updatedRecipe.getCookingStep());
        recipe.setFinishedImages(updatedRecipe.getFinishedImages());
        recipe.setTags(updatedRecipe.getTags());
    }

    // 레시피 삭제
    public void deleteRecipe(long id) {
        if (!rr.existsById(id)) {
            throw new NotFoundException("레시피를 찾을 수 없습니다", "id");
        }
        rr.deleteById(id);
    }

    // 찜하기 추가
    public void addFavoriteRecipe(long memberId, long recipeId) {
        Member member = mr.findById(memberId)
                .orElseThrow(() -> new UnauthorizedException("회원 정보를 찾을 수 없습니다", "memberId"));
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "recipeId"));

        member.getFavoriteRecipes().add(recipe);
        mr.save(member);
    }

    // 찜한 레시피 목록 조회
    public Page<RecipeSummary> getFavoriteRecipes(long memberId, Pageable pageable) {
        Member member = mr.findById(memberId)
                .orElseThrow(() -> new UnauthorizedException("회원 정보를 찾을 수 없습니다", "memberId"));
        Page<RecipeSummary> test = rr.findByFavoriteByMembersContains(member, pageable);
        return rr.findByFavoriteByMembersContains(member, pageable);
    }

    // 찜하기 제거
    public void deleteFavoriteRecipe(long memberId, long recipeId) {
        Member member = mr.findById(memberId)
                .orElseThrow(() -> new UnauthorizedException("회원 정보를 찾을 수 없습니다", "memberId"));
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "recipeId"));

        member.getFavoriteRecipes().remove(recipe);
        mr.save(member);
    }

    public Page<RecipeSummary> getRecipesByCategory(String category, Pageable pageable) {
        return rr.findByCategory(category, pageable);
    }

    public Page<RecipeSummary> getUserRecipeList(String username, Pageable pageable) {
        IMember member = mr.findByUsername(username, IMember.class)
                .orElseThrow(() -> new NotFoundException("사용자를 찾을 수 없습니다", "username"));
        return rr.findAllByMember_Id(member.getId(), pageable);
    }

    public List<Map<String, Object>> getDailyViewsRanking() {
        LocalDate today = LocalDate.now();
        Timestamp startOfDay = Timestamp.valueOf(today.atStartOfDay());
        Timestamp endOfDay = Timestamp.valueOf(today.atTime(LocalTime.MAX));

        return rr.findTotalViewsByMember(startOfDay, endOfDay);
    }

    public List<Map<String, Object>> getWeeklyViewsRanking() {
        LocalDate today = LocalDate.now();
        LocalDate startOfWeek = today.with(TemporalAdjusters.previousOrSame(java.time.DayOfWeek.MONDAY));
        LocalDate endOfWeek = today.with(TemporalAdjusters.nextOrSame(java.time.DayOfWeek.SUNDAY));

        Timestamp startOfWeekTs = Timestamp.valueOf(startOfWeek.atStartOfDay());
        Timestamp endOfWeekTs = Timestamp.valueOf(endOfWeek.atTime(LocalTime.MAX));

        return rr.findTotalViewsByMember(startOfWeekTs, endOfWeekTs);
    }

    public List<Map<String, Object>> getMonthlyViewsRanking() {
        LocalDate today = LocalDate.now();
        LocalDate startOfMonth = today.with(TemporalAdjusters.firstDayOfMonth());
        LocalDate endOfMonth = today.with(TemporalAdjusters.lastDayOfMonth());

        Timestamp startOfMonthTs = Timestamp.valueOf(startOfMonth.atStartOfDay());
        Timestamp endOfMonthTs = Timestamp.valueOf(endOfMonth.atTime(LocalTime.MAX));

        return rr.findTotalViewsByMember(startOfMonthTs, endOfMonthTs);
    }

}



