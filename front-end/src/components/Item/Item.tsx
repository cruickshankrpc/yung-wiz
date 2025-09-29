import { useParams } from "react-router-dom";
import { ListDataProps, ListProps } from "../../types";
import { WindowComponent } from "../Window/WindowComponent";
import ReactPlayer from "react-player";
import "./Item.styles.css";
import useDatabaseList from "../../hooks/useDatabaseList";
import { PendingModal } from "../Modals/PendingModal";
import { ErrorModal } from "../Modals/ErrorModal";

// TODO
// lazy loading
// cleanup styles for consistency

const TextItem = ({ data }: any) => {
  return (
    <div style={{ maxWidth: "500px" }}>
      {data.map((content: string, idx: number) => (
        <div key={idx} style={{ whiteSpace: "pre-line", padding: "15px" }}>
          {content}
        </div>
      ))}
    </div>
  );
};

export const Item = () => {
  const { itemTitle } = useParams(); // this can be used as a prop
  const { data, error, isPending, isLoading } = useDatabaseList();

  const clickedItem =
    data && data.find((item: ListDataProps) => item.title === itemTitle);

  console.log(clickedItem);
  const Content = () => {
    if (error) return <ErrorModal />;

    if (isPending || isLoading) return <PendingModal />;

    return (
      <>
        {clickedItem?.contentArr && <TextItem data={clickedItem?.contentArr} />}
        {clickedItem?.fileUrl && !clickedItem.audioUrl && (
          <img
            src={`${clickedItem.fileUrl}`}
            height={400}
            width={600}
            fetchPriority="high"
          />
        )}
        {clickedItem?.audioUrl && (
          <video controls autoPlay>
            <source src={`${clickedItem.fileUrl}`} type="audio/x-m4a"></source>
          </video>
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

  return (
    <WindowComponent
      className="Item"
      title={
        isPending || isLoading || error
          ? "Diagnostics"
          : itemTitle
            ? itemTitle
            : ""
      }
      width="fit-content"
      clickedItem={clickedItem}
    >
      <Content />
    </WindowComponent>
  );
};
