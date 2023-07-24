export type RviseSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type RviseTextSize = RviseSize | 'label' | 'titleLabel' | 'description' | 'accent' | 'body' | 'lead' | 'caption'
export type RviseNumberSize = RviseSize | number
export type RviseSizes = Record<RviseSize | number, number | string>
export type RviseTextSizes = Record<RviseSize | RviseTextSize, number | string>
