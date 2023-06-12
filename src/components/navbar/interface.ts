export interface MenuOpenProps {
  open: boolean;
}

export interface SetMenuOpenProps extends MenuOpenProps {
  setOpen: (open: boolean) => void;
}
