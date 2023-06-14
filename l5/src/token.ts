enum TokenType {
  // Keywords
  PARTY = "PARTY",
  WHERE = "WHERE",
  MUST = "MUST",
  MEANS = "MEANS",

  // Deontic actions
  // MUST | MAY can be lexed for future sugaring
  OBLIGATED = "OBLIGATED",
  PERMITTED = "PERMITTED",

  FULFILLED = "FULFILLED",
  PERFORMED = "PERFORMED",

  // Control flow
  IF = "IF",
  THEN = "THEN",
  ELSE = "ELSE",
  TERNARY = "?",

  // Temporal constraints
  WITHIN = "WITHIN",
  BETWEEN = "BETWEEN",
  BEFORE = "BEFORE",
  BEFORE_ON = "BEFORE_ON",
  AFTER = "AFTER",
  AFTER_ON = "AFTER_ON",
  ON = "ON",

  // Actions & Types
  ACTION = "Action",
  LEFT_ARROW = "<",
  RIGHT_ARROW = ">",

  // Symbols
  IDENTIFIER = "IDENTIFIER",
  SEMICOLON = ":",
  DOUBLE_SEMICOLON = "::",
  AND = "&&",
  OR = "||",
  NOT = "!",
  DOLLAR = "$",
  BACKTICK = "`",

  // Booleans
  TRUE = "True",
  FALSE = "False",

  PLUS = "+",
  MINUS = "-",
  // Note that STAR will be double used for
  // private_regulative_rule and integers
  STAR = "*",
  SLASH = "/",

  COMMENT = "--",
}

type Token = {
  token_type: TokenType;
  literal: string;
  line: number;
  begin_col: number;
  end_col: number;
};

export { Token, TokenType };