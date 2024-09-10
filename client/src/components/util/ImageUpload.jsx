import { useState, createContext, useContext, useCallback } from "react";

import { axios, cn } from "@utils/index";

/** @type {React.Context<{handleUpload: (file: File) => Promise<void>, setImage: React.Dispatch<?string>}>} */
const ImageUploadActionContext = createContext();

/** @type {React.Context<{inputId: string, image: ?string, progress: number}>} */
const ImageUploadValueContext = createContext();

const useImageUploadAction = () => {
  const context = useContext(ImageUploadActionContext);
  if (!context) {
    throw new Error(
      "useImageUploadAction must be used within a ImageUploadProvider",
    );
  }
  return context;
};

const useImageUploadValue = () => {
  const context = useContext(ImageUploadValueContext);
  if (!context) {
    throw new Error(
      "useImageUploadValue must be used within a ImageUploadProvider",
    );
  }
  return context;
};

/**
 * 이미지 업로드를 위한 컴포넌트입니다.
 * 이 컴포넌트는 이미지 업로드를 위한 input 요소와 레이블, 미리보기, 진행률 표시 등을 포함할 수 있습니다.
 *
 * @see {@link ImageUploadInput} 포함되지 않으면 {@link ImageUploadLabel} 컴포넌트와 연결되지 않습니다.
 * @see {@link ImageUploadLabel}
 * @see {@link ImageUploadPreview}
 * @see {@link ImageUploadProgressBar}
 * @see {@link ImageUploadLoader}
 * @see {@link ImageUploadFallback}
 *
 * @example
 * ```jsx
 * <ImageUploadProvider image={image} setImage={setImage}>
 *   <ImageUploadInput />
 *   <ImageUploadLabel>
 *     <ImageUploadPreview />
 *     <ImageUploadFallback>
 *       Click or Drop
 *     </ImageUploadFallback>
 *   </ImageUploadLabel>
 *   <ImageUploadProgressBar />
 * </ImageUploadProvider>
 * ```
 *
 * @param {{image: ?string, setImage: function(string): void} & React.HTMLAttributes} props
 */
function ImageUploadProvider({ image, setImage, id, children, ...props }) {
  const inputId = id || `input-${Math.random().toString(36).substring(7)}`;
  const [progress, setProgress] = useState(null);

  const handleUpload = useCallback(
    async (file) => {
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/api/static", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => setProgress(((e.loaded / e.total) * 100) | 0),
      });
      setImage(`/api/static/${response.data.name}`);
      setProgress(null);
    },
    [setImage],
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      handleUpload(event.dataTransfer.files[0]);
    },
    [handleUpload],
  );

  const onDragOver = useCallback((event) => event.preventDefault(), []);

  return (
    <ImageUploadActionContext.Provider value={{ handleUpload, setImage }}>
      <ImageUploadValueContext.Provider value={{ inputId, image, progress }}>
        <div onDrop={onDrop} onDragOver={onDragOver} {...props}>
          {children}
        </div>
      </ImageUploadValueContext.Provider>
    </ImageUploadActionContext.Provider>
  );
}

/**
 * ImageUploadProvider 내에서 이미지 업로드를 위한 input 요소 컴포넌트입니다.
 * 이 컴포넌트는 자동으로 숨겨집니다. {@link ImageUploadLabel} 컴포넌트와 연결하여 사용합니다.
 *
 * @see {@link ImageUploadLabel}
 *
 * @param {React.InputHTMLAttributes} props
 */
function ImageUploadInput({ children, ...props }) {
  const { inputId } = useImageUploadValue();
  const { handleUpload } = useImageUploadAction();

  return (
    <input
      id={inputId}
      type="file"
      className="hidden"
      readOnly
      onChange={(event) => handleUpload(event.target.files[0])}
      {...props}
    />
  );
}

/**
 * ImageUploadProvider 내에서 이미지 업로드를 위한 레이블 컴포넌트입니다.
 * 이 컴포넌트는 input 요소와 연결되어 이미지 업로드를 트리거합니다.
 * 내부에 {@link ImageUploadPreview}, {@link ImageUploadProgressBar}, {@link ImageUploadLoader} 등을 포함할 수 있습니다.
 *
 * @see {@link ImageUploadInput}
 * @see {@link ImageUploadPreview}
 * @see {@link ImageUploadProgressBar}
 *
 * @param {React.LabelHTMLAttributes} props
 */
function ImageUploadLabel({ children, ...props }) {
  const { inputId } = useImageUploadValue();

  return (
    <label htmlFor={inputId} role="button" {...props}>
      {children}
    </label>
  );
}

/**
 * ImageUploadProvider 내에서 이미지 값이 있고 업로드 중이 아닐 때 이미지를 렌더링하는 컴포넌트입니다.
 *
 * @param {React.ImgHTMLAttributes} props
 */
function ImageUploadPreview({ ...props }) {
  const { image, progress } = useImageUploadValue();

  return image && !progress ? (
    <img src={image} alt="preview" {...props} />
  ) : null;
}

/**
 * ImageUploadProvider 내에서 이미지가 업로드 중일 때 진행률 표시를 위한 컴포넌트입니다.
 * 이 컴포넌트 대신 {@link ImageUploadLoader} 컴포넌트를 사용하여 업로드 진행 여부에 따라 렌더링할 수도 있습니다.
 *
 * @see {@link ImageUploadLoader}
 *
 * @param {{progressProps: React.HTMLAttributes} & React.HTMLAttributes} props
 */
function ImageUploadProgressBar({ progressProps, ...props }) {
  const { progress } = useImageUploadValue();

  return progress ? (
    <div
      {...props}
      className={cn(
        "w-full h-full bg-gray-200 rounded-full overflow-hidden",
        props?.className,
      )}
    >
      <div
        {...progressProps}
        className={cn(
          "h-full bg-primary transition-[width] duration-500",
          progressProps?.className,
        )}
        style={{ width: `${progress}%` }}
      />
    </div>
  ) : null;
}

/**
 * ImageUploadProvider 내에서 이미지가 업로드 중일 때 children을 렌더링하는 컴포넌트입니다.
 * 이 컴포넌트 대신 {@link ImageUploadProgressBar} 컴포넌트를 사용하여 업로드 진행률을 표시할 수도 있습니다.
 *
 * @see {@link ImageUploadProgressBar}
 *
 * @param {React.HTMLAttributes} props
 */
function ImageUploadLoader({ children, ...props }) {
  const { progress } = useImageUploadValue();

  return progress ? <div {...props}>{children}</div> : null;
}

/**
 * ImageUploadProvider 내에서 이미지가 없고 업로드 중이 아닐 때 children을 렌더링하는 컴포넌트입니다.
 * 일반적으로 이미지 업로드 버튼을 렌더링하는 데 사용됩니다.
 *
 * @param {React.HTMLAttributes} props
 */
function ImageUploadFallback({ children, ...props }) {
  const { image, progress } = useImageUploadValue();

  return !image && !progress ? <div {...props}>{children}</div> : null;
}

export {
  useImageUploadAction,
  useImageUploadValue,
  ImageUploadProvider,
  ImageUploadInput,
  ImageUploadLabel,
  ImageUploadPreview,
  ImageUploadProgressBar,
  ImageUploadLoader,
  ImageUploadFallback,
};
