describe('pigLatin', function() {
  it("translates a sentence into Pig Latin", function() {
    expect(pigLatin("yay this is quite a sentence")).to.equal("ayyay isthay isay itequay aay entencesay ");
  });
});

describe('pigLatinWord', function(){
  it("attaches consonents and ay to end of word", function() {
    expect(pigLatinWord("group")).to.equal("oupgray");
  });

  it("just adds 'ay' to end when word starts with vowel", function() {
    expect(pigLatinWord("apple")).to.equal("appleay");
  });

  it("moves 'u' to end of word along with 'q'", function() {
    expect(pigLatinWord("squeal")).to.equal("ealsquay");
  });

  it("treats 'y' as a vowel in middle of word", function() {
    expect(pigLatinWord("rhythm")).to.equal("ythmrhay");
  });
});


describe('checkIfVowel', function() {
  it("returns true when given a vowel", function() {
    expect(checkIfVowel("e")).to.equal(true);
  });

  it("returns false when given a consonant", function() {
    expect(checkIfVowel("p")).to.equal(false);
  });
});

describe('checkIfY', function() {
  it("returns true when 'y'", function() {
    expect(checkIfY("y")).to.equal(true);
  });

  it("returns false when not 'y'", function() {
    expect(checkIfY("p")).to.equal(false);
  });
});

describe('checkIfQU', function() {
  it("returns true when starts with 'qu'", function() {
    expect(checkIfQU("quiet")).to.equal(true);
  });

  it("returns false when doesn't start with 'qu'", function() {
    expect(checkIfQU("pickle")).to.equal(false);
  });
});

describe('returnFirstLetter', function() {
  it("returns first letter of a word", function() {
    expect(returnFirstLetter("cat")).to.equal("c");
  });
});

describe('removeFirstLetter', function() {
  it("removes first letter of a word", function() {
    expect(removeFirstLetter("cat")).to.equal("at");
  });
});

describe('appendLetterToEnd', function() {
  it("appends given letter to end of given word", function() {
    expect(appendLetterToEnd("at", "c")).to.equal("atc");
  });
});

describe('addAy', function() {
  it("adds 'ay' to the end of a string", function() {
    expect(addAy("atc")).to.equal("atcay");
  });
});

describe('breakSentenceIntoWords', function() {
  it("returns array of words from sentence", function() {
    expect(breakSentenceIntoWords("this is a sentence")).to.eql(["this", "is", "a", "sentence"]);
  });
});
