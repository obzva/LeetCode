/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = 1;
  let resultString = s[0];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const subString = s.slice(i, j + 1);
      if (subString.length % 2 == 0) {
        const partitionFront = subString.slice(0, subString.length / 2);
        const partitionBackReversed = subString
          .slice(subString.length / 2)
          .split("")
          .reverse()
          .join("");
        if (partitionFront === partitionBackReversed) {
          if (subString.length > result) {
            result = subString.length;
            resultString = subString;
          }
        }
      } else {
        const partitionFront = subString.slice(0, (subString.length / 2) >> 0);
        const partitionBackReversed = subString
          .slice(Math.ceil(subString.length / 2))
          .split("")
          .reverse()
          .join("");
        if (partitionFront === partitionBackReversed) {
          if (subString.length > result) {
            result = subString.length;
            resultString = subString;
          }
        }
      }
    }
  }
  return resultString;
};

//testCase
s = "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv";
console.log(longestPalindrome(s));
