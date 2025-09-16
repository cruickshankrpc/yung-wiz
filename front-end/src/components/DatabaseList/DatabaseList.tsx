import { Link } from "react-router";
import { ListDataProps, ListProps } from "../../types";
import { WindowComponent } from "../Window/Window.component";
import "./DatabaseList.styles.css";
import "7.css/dist/7.scoped.css";
import useDatabaseList from "../../hooks/useDatabaseList";

export const PendingModal = () => {
  return (
    <div className="win7">
      <div className="window active is-bright" aria-labelledby="dialog-title">
        <div className="title-bar">
          <div className="title-bar-text" id="dialog-title"></div>
          <div className="title-bar-controls">
            <button
              aria-label="Close"
              onClick={() => window.history.back()}
            ></button>
          </div>
        </div>
        <div className="window-body has-space">
          <h2 className="instruction instruction-primary">
            Loading database...
          </h2>
          <div role="progressbar" className="marquee"></div>
        </div>
        <footer style={{ textAlign: "right" }}>
          <button onClick={() => window.history.back()}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

// TODO add error component
const Content = () => {
  const { error, data, isPending, isLoading } = useDatabaseList();

  console.log("isLoading", isLoading);
  console.log("isPending", isPending);

  if (error) return <span>Error loading content</span>;

  if (isLoading) return <PendingModal />;

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
    <div className="Database__Wrapper win7">
      <WindowComponent
        className="Database"
        content={<Content />}
        title="Database"
      />
    </div>
  );
};
