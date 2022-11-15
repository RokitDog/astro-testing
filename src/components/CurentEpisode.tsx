// import VideoComponent from './VideoComponent'

import VideoComponent from './VideoComponent'

interface Props {
    searchParams: string
    link1: string
    link2: string
    slug: string
}

function CurentEpisode({ link1, link2, slug, searchParams }: Props) {
    const episodeName = slug.replaceAll('-', ' ')

    return (
        <div>
            <h2 className="text-2xl font-medium mt-[34px] capitalize">
                {episodeName}, Episode: {searchParams}
            </h2>
            <VideoComponent src1={link1} src2={link2} />
        </div>
    )
}

export default CurentEpisode
