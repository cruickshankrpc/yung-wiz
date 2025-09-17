import { useParams } from "react-router-dom";
import { ListDataProps, ListProps } from "../../types";
import { WindowComponent } from "../Window/Window.component";
import ReactPlayer from "react-player";
import "./Item.styles.css";
import useDatabaseList from "../../hooks/useDatabaseList";
import { PendingModal } from "../Modals/PendingModal";
import { ErrorModal } from "../Modals/ErrorModal";

// TODO
// lazy loading
// add spinner/loading element
// cleanup styles for consistency

const TextItem = ({ data }: any) => {
  return (
    <div style={{ maxWidth: "500px" }}>
      {data.map((content: any) => (
        <div style={{ whiteSpace: "pre-line", padding: "15px" }}>{content}</div>
      ))}
    </div>
  );
};

export const Item = () => {
  const { itemTitle } = useParams();
  const { data, error, isPending, isLoading } = useDatabaseList();

  const clickedItem =
    data && data.find((item: ListDataProps) => item.title === itemTitle);

  const Content = () => {
    if (error) return <ErrorModal />;

    if (isPending || isLoading) return <PendingModal />;

    return (
      <>
        {clickedItem?.contentArr && <TextItem data={clickedItem?.contentArr} />}
        {clickedItem?.fileUrl && (
          <img
            src={`${clickedItem.fileUrl}`}
            height={400}
            width={600}
            fetchPriority="high"
          />
        )}
        {clickedItem?.link && (
          <ReactPlayer
            src={clickedItem.link}
            width={450}
            height={250}
            controls
          />
        )}
      </>
    );
  };

  return clickedItem ? (
    <WindowComponent
      className="Item"
      content={<Content />}
      title={
        isPending || isLoading || error
          ? "Diagnostics"
          : itemTitle
            ? itemTitle
            : ""
      }
      width="fit-content"
      modalId="item-modal"
    />
  ) : null;
};
