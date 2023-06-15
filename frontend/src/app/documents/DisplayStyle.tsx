import { Tabs, TabsProps, rem } from "@mantine/core";
import { BsGridFill } from "react-icons/bs";
import { BiListUl } from "react-icons/bi";

// I copy this directly, don't mind me
function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      defaultValue="grid"
      classNames={{
        tab: "!bg-white py-2 px-2",
      }}
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          color: theme.colors.gray[9],
          cursor: "pointer",
          fontSize: theme.fontSizes.sm,
          display: "flex",
          alignItems: "center",

          "&:first-of-type": {
            borderTopLeftRadius: theme.radius.sm,
            borderBottomLeftRadius: theme.radius.sm,
          },

          "&:last-of-type": {
            borderTopRightRadius: theme.radius.sm,
            borderBottomRightRadius: theme.radius.sm,
          },

          "&[data-active]": {
            backgroundColor: "#C3DDFD !important",
            borderColor: "#C3DDFD !important",
          },
        },

        tabIcon: {
          display: "flex",
          alignItems: "center",
        },

        tabsList: {
          display: "flex",
        },
      })}
      {...props}
    />
  );
}

const DisplayStyle = () => {
  return (
    <StyledTabs defaultValue={"grid"}>
      <Tabs.List>
        <Tabs.Tab value="grid" icon={<BsGridFill size="19" />}></Tabs.Tab>
        <Tabs.Tab value="list" icon={<BiListUl size="19" />}></Tabs.Tab>
      </Tabs.List>
    </StyledTabs>
  );
};

export default DisplayStyle;
