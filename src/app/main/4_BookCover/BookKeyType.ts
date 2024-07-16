export interface BookKeyType {
    description: Description
    covers: number[]
    key: string
    authors: Author[]
    title: string
    subjects: string[]
    type: Type2
    latest_revision: number
    revision: number
    created: Created
    last_modified: LastModified
  }
  
  export interface Description {
    type: string
    value: string
  }
  
  export interface Author {
    type: Type
    author: Author2
  }
  
  export interface Type {
    key: string
  }
  
  export interface Author2 {
    key: string
  }
  
  export interface Type2 {
    key: string
  }
  
  export interface Created {
    type: string
    value: string
  }
  
  export interface LastModified {
    type: string
    value: string
  }