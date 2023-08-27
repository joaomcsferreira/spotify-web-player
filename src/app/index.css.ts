const styles = {
  section: "flex flex-col gap-3",
  userPlaylists:
    "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 flex-wrap",
  playlist:
    "bg-white-glass h-20 rounded-md flex items-center gap-4 cursor-pointer overflow-hidden hover:bg-white/20",
  playlistCover: "w-20 h-20",
  playlistName: "font-bold",
  recommendedPlaylist: "flex gap-3 w-full justify-between overflow-x-scroll",
  recommendedPlaylistItem:
    "bg-crow p-4 rounded-md min-w-[10rem] w-full h-64 flex flex-col gap-3.5 cursor-pointer hover:bg-white/5",
  recommendedPlaylistItemCover: "w-100 h-[70%] rounded-md",
  recommendedPlaylistItemName: "font-black",
  recommendedPlaylistItemDescription: "text-silver text-sm",
}

export default styles
