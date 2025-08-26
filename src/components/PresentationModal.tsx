import SlidePresentation from "./SlidePresentation";
import Modal from "./modal/Modal";

export const PresentationModal = (props: {
    show: boolean;
    onProgress: (data: Blob | undefined) => void;
    onSubmit: (data: Blob | undefined) => void;
    onClose: () => void;
    slideContent: string[]
}) => {

    return (
        <Modal
            show={props.show}
            title={"Present"}
            content={
                <div>
                    <SlidePresentation slideContent={props.slideContent} />
                    {"Select an Audio Device to begin"}
                </div>
            }
            onClose={props.onClose}
            submitText={"Start"}
            onSubmit={() => props.onClose()}
        />
    );
}