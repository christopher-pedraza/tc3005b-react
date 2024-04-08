import { Title } from "./Title";

export default {
  title: "Example/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    primary: true,
    title: "Título",
  },
};

export const Secondary = {
  args: {
    title: "Título",
  },
};

export const Large = {
  args: {
    size: "large",
    title: "Título",
  },
};

export const Small = {
  args: {
    size: "small",
    title: "Título",
  },
};
