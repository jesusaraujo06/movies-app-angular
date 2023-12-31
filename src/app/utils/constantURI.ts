const baseUrl = 'https://api.themoviedb.org/3';

export class ConstantsURI {
  public static readonly apiKey = 'b97d258ff09ef40083bfd59757cfd7cf';
  public static readonly validateWithLogin = `${baseUrl}/authentication/token/validate_with_login`;
  public static readonly tokenNew = `${baseUrl}/authentication/token/new`;
  public static readonly popularMovies = `${baseUrl}/movie/popular`;
  public static readonly movieDetail = `${baseUrl}/movie`;
  public static readonly pathImg = `https://image.tmdb.org/t/p/original`;
}
