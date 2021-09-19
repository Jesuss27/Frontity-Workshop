import Root from "./theme-files/index"

export default {
  name: "jsnation-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMenuOpen : false,
      autoPrefetch: "hover"
    },
    
  },
  actions: {
    theme: {
      openMenu:  ({state})  => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({state}) => {
        state.theme.isMenuOpen = false;
      },
      beforeSSR: async ({actions}) => {
        await actions.source.fetch("/contact");
      }

    }
  }
};
