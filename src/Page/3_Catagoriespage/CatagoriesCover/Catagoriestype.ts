export interface Catagoriestype {
    authors: any[]
    availability: Availability
    cover_edition_key: string
    cover_id: number
    edition_count: number
    first_publish_year: number
    has_fulltext: boolean
    ia: string
    ia_collection: string[]
    key: string
    lending_edition: string
    lending_identifier: string
    lendinglibrary: boolean
    printdisabled: boolean
    public_scan: boolean
    subject: string[]
    title: string
  }
  
export interface Availability {
    status: string
    available_to_browse: boolean
    available_to_borrow: boolean
    available_to_waitlist: boolean
    is_printdisabled: boolean
}