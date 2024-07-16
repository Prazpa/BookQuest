export interface Book {
    author_key: string[]
    author_name: string[]
    cover_edition_key?: string
    cover_i: number
    edition_count: number
    first_publish_year: number
    has_fulltext: boolean
    key: string
    public_scan_b: boolean
    title: string
    ia?: string[]
    ia_collection_s?: string
    language?: string[]
    lending_edition_s?: string
    lending_identifier_s?: string
    availability?: Availability
}

export interface Availability {
    status: string
    available_to_browse: boolean
    available_to_borrow: boolean
    available_to_waitlist: boolean
    is_printdisabled: boolean
    is_readable: boolean
    is_lendable: boolean
    is_previewable: boolean
    identifier: string
    isbn: string
    oclc: any
    openlibrary_work: string
    openlibrary_edition: string
    last_loan_date: string
    num_waitlist: string
    last_waitlist_date: string
    is_restricted: boolean
    is_browseable: boolean
    __src__: string
}