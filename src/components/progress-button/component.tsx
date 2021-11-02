import { Icon } from "../Icon";

const ProgressButton = () => {
  return (
    <>
      <button className="progress-button">
        Success <Icon type="chevron" color="white" />{" "}
      </button>
      <style jsx>
        {`
          .progress-button {
            background-color: var(--base-color);
            color: var(--color-light);
            min-width: 214px;
            max-height: 60px;
            border-radius: 8px;
          }
        `}
      </style>
    </>
  );
};

export { ProgressButton };
