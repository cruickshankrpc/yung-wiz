import { Link } from "react-router";
import { ListDataProps, ListProps } from "../../types";
import { WindowComponent } from "../Window/Window.component";
import "./DatabaseList.styles.css";
import "7.css/dist/7.scoped.css";
import useDatabaseList from "../../hooks/useDatabaseList";
import { PendingModal } from "../Modals/PendingModal";
import { ErrorModal } from "../Modals/ErrorModal";

const Content = () => {
  const { error, data, isLoading, isPending } = useDatabaseList();

  if (error) {
    return <ErrorModal />;
  }
  if (isLoading || isPending) {
    return <PendingModal />;
  }

  return (
    <ul role="listbox" className="has-shadow has-hover">
      {data &&
        data.map((item: ListDataProps, idx: number) => {
          return (
            <div>
              <Link to={`/home/database/${item.title}`}>
                <li role="option" key={idx} id={item.title}>
                  {item.title}
                </li>
              </Link>
            </div>
          );
        })}
    </ul>
  );
};

export const DatabaseList = () => {
  return (
    <WindowComponent
      modalId="database-list"
      className="Database"
      content={<Content />}
      title="Database"
    />
  );
};
