import { useState } from "react";
import "./imageViewer.css";
import prevIcon from "../../assets/icons/chevron-left.svg";
import nextIcon from "../../assets/icons/chevron-right.svg";

const ImageViewer = (props) => {
    const { images, onClose, firstImageIndex } = props;
    const [activeImage, setActiveImage] = useState(images[firstImageIndex]);

    const handleGoPrev = () => {
        if (activeImage !== images[0]) {
            setActiveImage(images[images.indexOf(activeImage) - 1]);
        }
    };

    const handleGoNext = () => {
        if (activeImage !== images[images.length - 1]) {
            setActiveImage(images[images.indexOf(activeImage) + 1]);
        }
    };

    return (
        <div className="images-viewer--backdrop">
            <div className="images-viewer--container">
                <div className="images-viewer--header">
                    <img
                        src=""
                        alt="X"
                        onClick={() => onClose()}
                        className="images-viewer--close"
                    />
                </div>
                <div className="images-viewer--body">
                    {activeImage !== images[0] && (
                        <img
                            src={prevIcon}
                            alt="icone précédent"
                            className="images-viewer--icons icon-prev"
                            onClick={handleGoPrev}
                        />
                    )}
                    <img
                        className="images-viewer--image"
                        src={activeImage}
                        alt="image du projet"
                    />
                    {activeImage !== images[images.length - 1] && (
                        <img
                            src={nextIcon}
                            alt="icone suivant"
                            className="images-viewer--icons icon-next"
                            onClick={handleGoNext}
                        />
                    )}
                </div>
                <div className="images-viewer--footer">
                    {images.map((image, index) => (
                        <span
                            key={index}
                            className={`images-viewer--step ${
                                activeImage === image && "active-step"
                            }`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageViewer;
