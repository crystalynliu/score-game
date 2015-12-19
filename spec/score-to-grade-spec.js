describe('score-to-grade-spec', function() {
    var score1 = 100;
    var score2 = 95;
    var score3 = 90;
    var score4 = 85;
    var score5 = 80;
    var score6 = 74;
    var score7 = 70;
    var score8 = 63;
    var score9 = 60;
    var score10 = 40;
    var v_score1 = 110;
    var v_score2 = -20;

  it('up_border_90-100', function() {
    var result = single_element(score1);
    expect(result).toEqual('S');
  });

  it('between_90-100', function() {
    var result = single_element(score2);
    expect(result).toEqual('S');
  });
  it('down_border_90-100', function() {
    var result = single_element(score3);
    expect(result).toEqual('S');
  });
  it('between_80-90', function() {
    var result = single_element(score4);
    expect(result).toEqual('A');
  });
  it('down_border_80-90', function() {
    var result = single_element(score5);
    expect(result).toEqual('A');
  });
  it('between_70-80', function() {
    var result = single_element(score6);
    expect(result).toEqual('B');
  });
  it('down_border_70-80', function() {
    var result = single_element(score7);
    expect(result).toEqual('B');
  });
  it('between_60-70', function() {
    var result = single_element(score8);
    expect(result).toEqual('C');
  });

  it('down_border_60-70', function() {
    var result = single_element(score9);
    expect(result).toEqual('C');
  });
  it('below_60', function() {
    var result = single_element(score10);
    expect(result).toEqual('D');
  });
  it('invalid_score<0', function() {
    var result = function(){single_element(v_score2)};
    expect(result).toThrowError('input invalid');
  });
  it('invalid_score>100', function() {
    var result = function(){single_element(v_score1)};
    expect(result).toThrowError('input invalid');
  });
});
