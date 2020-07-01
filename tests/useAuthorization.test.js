const jwtDecode = require("jwt-decode"); 

describe('Decode JWT token', () => {
  it('Successfully decodes JWT Token', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqYXNvbiIsInBhc3N3b3JkX2RpZ2VzdCI6IiQyYiQxMiRZZEtSeDRoM3F3LkVSN2kxR0VYa2VlcTlXYXA5ZHBZcnBvNGlrbVBPdi9nUmhlZW95VGN0MiIsImlhdCI6MTU5Mjg2ODMxM30.GEu8Fivam11ydsm3v0rtw0tldRwlzOiGtoQV33HCPRc'
    const expectedPayload = {
      "id": 1,
      "username": "jason",
      "password_digest": "$2b$12$YdKRx4h3qw.ER7i1GEXkeeq9Wap9dpYrpo4ikmPOv/gRheeoyTct2",
      "iat": 1592868313
    }
    const decodedToken = jwtDecode(token);
    const testValue = JSON.parse(JSON.stringify(decodedToken));
    const expectedValue = JSON.parse(JSON.stringify(expectedPayload))
    expect(testValue).toEqual(expectedValue)
  })
})
