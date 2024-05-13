export interface catagoriesListType {
  Arts: Art[]
  Animals: Animal[]
  Fiction: Fiction[]
  "Science and Mathematics": Mathematic[]
  "Business and Finance": BusinessAndFinance[]
  "Children's": GeneratedType[]
  History: History[]
  "Health and Wellness": Wellness[]
  Biography: Biography[]
  "Social Sciences": Science[]
  Places: Place[]
  Textbooks: Textbook[]
  Language: Language[]
}

export interface Art {
  title: string
  value: string
}

export interface Animal {
  title: string
  value: string
}

export interface Fiction {
  title: string
  value: string
}

export interface Mathematic {
  title: string
  value: string
}

export interface BusinessAndFinance {
  title: string
  value: string
}

export interface GeneratedType {
  title: string
  value: string
}

export interface History {
  title: string
  value: string
}

export interface Wellness {
  title: string
  value: string
}

export interface Biography {
  title: string
  value: string
}

export interface Science {
  title: string
  value: string
}

export interface Place {
  title: string
  value: string
}

export interface Textbook {
  title: string
  value: string
}

export interface Language {
  title: string
  value: string
}

//create object for Leftpanel
const catagories : catagoriesListType = {
  "Arts": [
    { "title": "Architecture", "value": "architecture" },
    { "title": "Art Instruction", "value": "art__art_instruction" },
    { "title": "Art History", "value": "history_of_art__art__design_styles" },
    { "title": "Dance", "value": "dance" },
    { "title": "Design", "value": "design" },
    { "title": "Fashion", "value": "fashion" },
    { "title": "Film", "value": "film" },
    { "title": "Graphic Design", "value": "graphic_design" },
    { "title": "Music", "value": "music" },
    { "title": "Music Theory", "value": "music_theory" },
    { "title": "Painting", "value": "painting__paintings" },
    { "title": "Photography", "value": "photography" }
  ],
  "Animals": [
    { "title": "Bears", "value": "bears" },
    { "title": "Cats", "value": "cats" },
    { "title": "Kittens", "value": "kittens" },
    { "title": "Dogs", "value": "dogs" },
    { "title": "Puppies", "value": "puppies" }
  ],
  "Fiction": [
    { "title": "Fantasy", "value": "fantasy" },
    { "title": "Historical Fiction", "value": "historical_fiction" },
    { "title": "Horror", "value": "horror" },
    { "title": "Humor", "value": "humor" },
    { "title": "Literature", "value": "literature" },
    { "title": "Magic", "value": "magic" },
    { "title": "Mystery and detective stories", "value": "mystery_and_detective_stories" },
    { "title": "Plays", "value": "plays" },
    { "title": "Poetry", "value": "poetry" },
    { "title": "Romance", "value": "romance" },
    { "title": "Science Fiction", "value": "science_fiction" },
    { "title": "Short Stories", "value": "short_stories" },
    { "title": "Thriller", "value": "thriller" },
    { "title": "Young Adult", "value": "young_adult_fiction" }
  ],
  "Science and Mathematics": [
    { "title": "Biology", "value": "biology" },
    { "title": "Chemistry", "value": "chemistry" },
    { "title": "Mathematics", "value": "mathematics" },
    { "title": "Physics", "value": "physics" },
    { "title": "Programming", "value": "programming" }
  ],
  "Business and Finance": [
    { "title": "Management", "value": "management" },
    { "title": "Entrepreneurship", "value": "entrepreneurship" },
    { "title": "Business Economics", "value": "business__economics" },
    { "title": "Business Success", "value": "success_in_business" },
    { "title": "Finance", "value": "finance" }
  ],
  "Children's": [
    { "title": "Kids Books", "value": "juvenile_literature" },
    { "title": "Stories in Rhyme", "value": "stories_in_rhyme" },
    { "title": "Baby Books", "value": "infancy" },
    { "title": "Bedtime Books", "value": "bedtime" },
    { "title": "Picture Books", "value": "picture_books" }
  ],
  "History": [
    { "title": "Ancient Civilization", "value": "ancient_civilization" },
    { "title": "Archaeology", "value": "archaeology" },
    { "title": "Anthropology", "value": "anthropology" },
    { "title": "World War II", "value": "search.json?q=subject%3AHistory&subject_facet=History&subject_facet=World+War%2C+1939-1945" },
    { "title": "Social Life and Customs", "value": "search.json?q=subject%3AHistory&subject_facet=History&subject_facet=Social+life+and+customs" }
  ],
  "Health and Wellness": [
    { "title": "Cooking", "value": "cooking" },
    { "title": "Cookbooks", "value": "cookbooks" },
    { "title": "Mental Health", "value": "mental_health" },
    { "title": "Exercise", "value": "exercise" },
    { "title": "Nutrition", "value": "nutrition" },
    { "title": "Self-help", "value": "self-help" }
  ],
  "Biography": [
    { "title": "Autobiographies", "value": "autobiography" },
    { "title": "History", "value": "search.json?q=subject%3ABiography&subject_facet=Biography&subject_facet=History" },
    { "title": "Politics and Government", "value": "search.json?q=subject%3ABiography&subject_facet=Biography&subject_facet=Politics+and+government" },
    { "title": "World War II", "value": "search.json.json?q=subject%3ABiography&subject_facet=Biography&subject_facet=World+War%2C+1939-1945" },
    { "title": "Women", "value": "search.json?q=subject%3ABiography&subject_facet=Biography&subject_facet=Women" },
    { "title": "Kings and Rulers", "value": "search.json?q=subject%3ABiography&subject_facet=Biography&subject_facet=Kings+and+rulers" },
    { "title": "Composers", "value": "search.json?q=subject%3ABiography&subject_facet=Biography&subject_facet=Composers" },
    { "title": "Artists", "value": "search.json?q=subject%3ABiography&subject_facet=Biography&subject_facet=Artists" }
  ],
  "Social Sciences": [
    { "title": "Anthropology", "value": "anthropology" },
    { "title": "Religion", "value": "religion" },
    { "title": "Political Science", "value": "political_science" },
    { "title": "Psychology", "value": "psychology" }
  ],
  "Places": [
    { "title": "Brazil", "value": "place%3Abrazil" },
    { "title": "India", "value": "place%3Aindia" },
    { "title": "Indonesia", "value": "place%3Aindonesia" },
    { "title": "United States", "value": "place%3Aunited_states" }
  ],
  "Textbooks": [
    { "title": "History", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=History" },
    { "title": "Mathematics", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Mathematics" },
    { "title": "Geography", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Geography" },
    { "title": "Psychology", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Psychology" },
    { "title": "Algebra", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Algebra" },
    { "title": "Education", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Education" },
    { "title": "Business & Economics", "value": "search.json?q=subject%3ATextbook+subject%3ABusiness&subject_facet=Textbooks" },
    { "title": "Science", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Science" },
    { "title": "Chemistry", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Chemistry" },
    { "title": "English Language", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=English+language" },
    { "title": "Physics", "value": "search.json?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Physics" },
    { "title": "Computer Science", "value": "search.json?q=subject%3A%22Computer+science%22&sort=editions&subject_facet=Computer+science" }
  ],
  "Language": [
    { "title": "English", "value": "search.json?q=language%3Aeng" },
    { "title": "French", "value": "search.json?q=language%3Afre" },
    { "title": "Spanish", "value": "search.json?q=language%3Aspa" },
    { "title": "German", "value": "search.json?q=language%3Ager" },
    { "title": "Russian", "value": "search.json?q=language%3Arus" },
    { "title": "Italian", "value": "search.json?q=language%3Aita" },
    { "title": "Chinese", "value": "search.json?q=language%3Achi" },
    { "title": "Japanese", "value": "search.json?q=language%3Ajpn" },
    { "title": "See more...", "value": "languages" }
  ]
}

export default catagories