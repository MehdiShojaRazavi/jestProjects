const calcDiscount = require('./../code');
const service = require('./../service');
//npm install @types/jest
describe("calcDiscount Group", ()=>{
  beforeEach(()=>{
    service.sendEmail = jest.fn();
  })
  it("should return 10 if user has more than 3 purchuse", ()=>{
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: 'john',
      purchaseCount: 7
    });
    expect(calcDiscount()).toBe(10);
  })
  it("should return 0 if user has less than 3 purchuse", ()=>{
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: 'john',
      purchaseCount: 2
    });
    expect(calcDiscount()).toBe(0);
  })
  it("should send an email", ()=>{
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: 'john',
      purchaseCount: 10
    });
    calcDiscount()
    expect(service.sendEmail).toHaveBeenCalled();
    expect(service.sendEmail.mock.calls[0][0]).toBe('john');
    expect(service.sendEmail.mock.calls[0][1]).toContain('10 percent');

  })
  
})