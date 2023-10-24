const baseUrl = 'https://api.themoviedb.org/3';

export class ConstantURI {
  public static readonly apiKey = 'b97d258ff09ef40083bfd59757cfd7cf';
  public static readonly validateWithLogin = `${baseUrl}/authentication/token/validate_with_login`;
  public static readonly tokenNew = `${baseUrl}/authentication/token/new`;
}
