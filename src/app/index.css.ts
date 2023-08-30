const styles = {
  section: "flex flex-col gap-3",
  userPlaylists:
    "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 flex-wrap",
  playlist:
    "bg-white-glass h-20 rounded-md flex items-center gap-4 cursor-pointer overflow-hidden hover:bg-white/20",
  playlistCover: "w-20 h-20 bg-zinc-400",
  playlistName: "font-bold",
  recommendedPlaylist:
    "grid gap-5 grid-cols-[repeat(auto-fill,minmax(170px,1fr))] w-full justify-between overflow-x-scroll",
  recommendedPlaylistItem:
    "bg-crow p-4 rounded-md gap-3.5 min-w-64 w-full flex flex-col cursor-pointer hover:bg-white/5",
  recommendedPlaylistItemCover: "w-full aspect-square relative rounded-md",
  recommendedPlylistItemCoverImage: "object-contain",
  recommendedPlaylistItemName: "font-black truncate w-[90%]",
  recommendedPlaylistItemDescription: "text-ellipsis-double-line",
}
export default styles
