type TOrderBy = 'name' | '-name' | 'modified' | '-modified';

export interface IParamCharacter {
  namne: string;
  nameStartsWith: string;
  modifiedSince: Date;
  orderBy: TOrderBy;
  comics: number;
  series: number;
  events: number;
  stories: number;
  limit: number;
  offset: number;
}

export interface ICharacter {
  code:            number | string;
  message?:        string;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            ICharacterData;
}

export interface ICharacterData {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: ICharacterResult[];
}

export interface ICharacterResult {
  id:          number;
  name:        string;
  description: string;
  modified:    string;
  thumbnail:   ICharacterThumbnail;
  resourceURI: string;
  comics:      ICharacterComics;
  series:      ICharacterComics;
  stories:     ICharacterStories;
  events:      ICharacterComics;
  urls:        ICharacterURL[];
}

export interface ICharacterComics {
  available:     number;
  collectionURI: string;
  items:         ICharacterComicsItem[];
  returned:      number;
}

export interface ICharacterComicsItem {
  resourceURI: string;
  name:        string;
}

export interface ICharacterStories {
  available:     number;
  collectionURI: string;
  items:         ICharacterStoriesItem[];
  returned:      number;
}

export interface ICharacterStoriesItem {
  resourceURI: string;
  name:        string;
  type:        string;
}

export interface ICharacterThumbnail {
  path:      string;
  extension: string;
}

export interface ICharacterURL {
  type: string;
  url:  string;
}
