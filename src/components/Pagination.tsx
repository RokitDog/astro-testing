interface Props {
    fetchAnimeDetails: any
    slug: string
    params: string
}

function Pagination({ fetchAnimeDetails, slug, params }: Props) {
    const totalEpisodes = Array.from(
        Array(Number(fetchAnimeDetails.totalEpisodes)).keys()
    )

    return (
        <>
            <div className="flex items-center justify-between mt-[12px]">
                <a
                    className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href={`/anime/${slug}/${Number(params) - 1}`}
                >
                    <svg
                        aria-hidden="true"
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    Previous Episode
                </a>
                {fetchAnimeDetails.totalEpisodes !== params && (
                    <a
                        className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        href={`/anime/${slug}/${Number(params) + 1}`}
                    >
                        Next Episode
                        <svg
                            aria-hidden="true"
                            className="ml-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                )}
            </div>
            <div className="flex flex-wrap gap-2 items-start justify-start mt-[12px] mb-[34px]">
                {totalEpisodes.map((episode) => (
                    <a
                        href={`/anime/${slug}/${episode + 1}`}
                        key={episode}
                        className={`px-2 py-1 rounded-md hover:bg-white hover:text-black hover:shadow-md  transition-all duration-150 ease-in-out cursor-pointer ${
                            episode + 1 === Number(params)
                                ? 'bg-[#F6399D]'
                                : 'bg-gray-900'
                        }`}
                    >
                        {episode + 1}
                    </a>
                ))}
            </div>
        </>
    )
}

export default Pagination