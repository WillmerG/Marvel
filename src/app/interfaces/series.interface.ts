export interface ISeries {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            ISeriesData;
}

export interface ISeriesData {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: ISeriesResult[];
}

export interface ISeriesResult {
  id:          number;
  title:       string;
  description: null | string;
  resourceURI: string;
  urls:        ISeriesURL[];
  startYear:   number;
  endYear:     number;
  rating:      string;
  type:        string;
  modified:    string;
  thumbnail:   ISeriesThumbnail;
  creators:    ISeriesCreators;
  characters:  ISeriesCharacters;
  stories:     ISeriesStories;
  comics:      ISeriesCharacters;
  events:      ISeriesCharacters;
  next:        null;
  previous:    null;
}

export interface ISeriesCharacters {
  available:     number;
  collectionURI: string;
  items:         ISeriesCharactersItem[];
  returned:      number;
}

export interface ISeriesCharactersItem {
  resourceURI: string;
  name:        string;
}

export interface ISeriesCreators {
  available:     number;
  collectionURI: string;
  items:         ISeriesCreatorsItem[];
  returned:      number;
}

export interface ISeriesCreatorsItem {
  resourceURI: string;
  name:        string;
  role:        string;
}

export interface ISeriesStories {
  available:     number;
  collectionURI: string;
  items:         ISeriesStoriesItem[];
  returned:      number;
}

export interface ISeriesStoriesItem {
  resourceURI: string;
  name:        string;
  type:        string;
}

export interface ISeriesThumbnail {
  path:      string;
  extension: string;
}

export interface ISeriesURL {
  type: string;
  url:  string;
}
