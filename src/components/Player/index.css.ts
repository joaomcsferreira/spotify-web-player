const styles = {
  container: "bg-black col-span-2 px-6 flex items-center relative",
  currentMusic: "flex gap-5 absolute left-5",
  currentMusicImage: "w-14 h-14 bg-teal-600 rounded-md",
  currentMusicInfo: "hidden flex-col justify-center md:flex",
  currentMusicInfoName:
    "text-sm font-medium capitalize cursor-pointer hover:underline",
  currentMusicInfoAlbum: "text-xs text-silver cursor-pointer hover:underline",
  currentMusicActions: "hidden gap-3 justify-center md:flex",
  currentMusicActionsItem: "cursor-pointer brightness-50 hover:brightness-100",
  player: "flex flex-col w-full gap-4 items-center justify-self-center",
  playerControls: "flex gap-6",
  playerControlsItem: "brightness-50 hover:brightness-100",
  playerControlsPlay: "p-1.5 bg-white rounded-full hover:scale-105",
  playerProgress: "flex gap-2 items-center",
  playerProgressTime: "text-xs text-silver",
  playerProgressBar: "min-w-[30vw] h-1 bg-silver rounded-full",
  multimedia: "absolute right-5 flex gap-2 md:gap-4",
  multimediaItem: "brightness-50 hover:brightness-100 cursor-pointer",
}

export default styles
