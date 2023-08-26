const styles = {
  wrapper: "p-2 pb-0 pl-1 min-w-[75vw]",
  container:
    "px-4 py-2 h-full w-full overflow-y-scroll grow flex flex-col gap-10 bg-[linear-gradient(180deg,_#25267a_5%,_#121212_100%)] rounded-md",
  section: "flex flex-col gap-3",
  userPlaylists:
    "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 flex-wrap",
  playlist:
    "bg-white-glass h-20 rounded-md flex items-center gap-4 overflow-hidden",
  playlistCover: "w-20 h-20",
  playlistName: "font-bold",
  recommendedPlaylist: "flex gap-3 w-full justify-between overflow-x-scroll",
  recommendedPlaylistItem:
    "bg-crow p-4 rounded-md min-w-[10rem] w-full h-64 flex flex-col gap-3.5",
  recommendedPlaylistItemCover: "w-100 h-[70%] rounded-md",
  recommendedPlaylistItemName: "font-black",
  recommendedPlaylistItemDescription: "text-silver text-sm",
}

export default styles
