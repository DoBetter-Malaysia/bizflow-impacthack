import { MantineThemeOverride } from "@mantine/core";

const mantineTheme: MantineThemeOverride = {
  colorScheme: "light",
  components: {
    Tooltip: {
      classNames: { tooltip: "text-xs bg-blue-600" },
    },
    Tabs: {
      classNames: {
        tab: "data-[active=true]:!border-blue-600 hover:border-blue-400 data-[active=true]:!text-blue-600 data-[active=true]:font-semibold hover:text-blue-500",
      },
    },
    Select: {
      classNames: {
        item: "data-[selected=true]:!bg-blue-600 data-[selected=true]:text-white transition-all",
        input: "!pr-0",
        wrapper: "max-w-[160px]",
      },
    },
  },
};

export default mantineTheme;
