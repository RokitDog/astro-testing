import AnimeCard from './AnimeCard'

function LatestAnime({ recentAnimeData1, recentAnimeData2 }: any) {
    return (
        <div>
            <div className="mt-[34px] bg-gray-900 p-4 rounded-md">
                <h2 className="text-2xl font-medium">Recent Episodes</h2>
            </div>
            <AnimeCard recentanime={recentAnimeData1} />
            <AnimeCard recentanime={recentAnimeData2} />
        </div>
    )
}

export default LatestAnime
