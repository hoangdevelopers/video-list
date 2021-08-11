
export interface IMovie {
    id: string
    title: string
    sharedBy: string
    like: string[]
    disLike: string[]
    description: string
    src: string
    poster?: string
    type: 'video/mp4' | 'youtube'
}