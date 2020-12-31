import casual from "casual";

export const mockGenerators = {
  person: casual.define("person", () => {
    return {
      name: casual.title,
      username: casual.username,
      email: casual.email,
      city: casual.city,
    };
  }),
};

export const mockFields = [
  // Address
  "country",
  "city",
  "zip",
  "street",
  "address",
  "address1",
  "address2",
  "state",
  "state_abbr",
  "latitude",
  "longitude",
  "building_number",

  // Text
  "sentence",
  "sentences",
  "title",
  "text",
  "description",
  "short_description",
  "string",
  "word",
  "words",
  "array_of_words",
  "letter",

  // Internet
  "ip",
  "domain",
  "url",
  "email",
  "user_agent",

  // Person
  "name",
  "username",
  "first_name",
  "last_name",
  "full_name",
  "password",
  "name_prefix",
  "name_suffix",
  "company_name",
  "company_suffix",
  "catch_phrase",
  "phone",

  // Numbers
  "random",
  "integer",
  "double",
  "array_of_digits",
  "array_of_integers",
  "array_of_doubles",
  "coin_flip",

  // Date
  "unix_time",
  "moment",
  "date",
  "time",
  "century",
  "am_pm",
  "day_of_year",
  "day_of_month",
  "day_of_week",
  "month_number",
  "month_name",
  "year",
  "timezone",

  // Payments
  "card_type",
  "card_number",
  "card_exp",
  "card_data",

  // Misc
  "country_code",
  "language_code",
  "locale",
  "currency",
  "currency_code",
  "currency_symbol",
  "currency_name",
  "mime_type",
  "file_extension",
  "boolean",
  "uuid",

  // Colors
  "color_name",
  "safe_color_name",
  "rgb_hex",
  "rgb_array",
];
