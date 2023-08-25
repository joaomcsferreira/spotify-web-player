const styles = {
  wrapper: "p-2 pb-0 pr-1 max-w-[25vw]",
  container: "h-full flex flex-col gap-2",
  nav: "bg-ebony rounded-md p-2",
  navItem: "py-3 px-4 flex gap-5 items-center cursor-pointer group",
  navItemIcon: "w-6 justify-self-center group-hover:brightness-100",
  navItemName:
    "text-md min-w-[12rem] hidden sm:block font-medium leading-4 capitalize group-hover:text-white",
  library: "bg-ebony rounded-md flex flex-col gap-3 h-full overflow-hidden",
  libraryHeader: "pt-4 pb-2 px-6 flex items-center justify-between",
  libraryTitle:
    "flex items-center gap-3 cursor-pointer brightness-50 hover:brightness-100",
  libraryAction: "hidden sm:flex gap-2.5",
  libraryActionItem:
    "px-2 rounded-full min-w-fit brightness-50 cursor-pointer hover:brightness-100 hover:bg-white/5",
  libraryActionItemIcon: "w-4",
  libraryTypes:
    "px-6 hidden sm:flex gap-2 w-full h-14 overflow-y-visible overflow-x-scroll",
  libraryTypesItem:
    "bg-white/10 px-3 py-1.5 h-fit cursor-pointer text-sm whitespace-nowrap	 rounded-full hover:bg-white/20",
  libraryFilter: "px-6 hidden sm:flex items-center justify-between",
  libraryFilterSortBy:
    "text-sm flex items-center gap-3 cursor-pointer brightness-50 hover:brightness-100",
  libraryItems: "h-full overflow-y-scroll sm:p-2.5",
  libraryItem: "p-2 m-auto flex rounded-md hover:bg-white/5 cursor-pointer",
  libraryItemCover: "w-12 h-12 rounded-md bg-slate-500",
  libraryItemInfo: "hidden sm:flex flex-col pl-2 pt-2 justify-between",
  libraryItemTitle: "text-sm md:text-md",
  libraryItemDescription:
    "font-light whitespace-nowrap overflow-hidden text-ellipsis text-xs brightness-75 md:text-sm",
}

export default styles
