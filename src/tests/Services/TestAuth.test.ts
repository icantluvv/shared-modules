// import { Auth } from "../../dto/objects/Auth";
// import { AuthService } from "../../api/services/AuthService";
//
// const testToken = "test_npm2"
//
// test("TestAuth", async () => {
//     const authService = new AuthService()
//     const AuthFull = await authService.TestAuth(testToken)
//     console.log(AuthFull)
// })
//
// test("AppleAuth", async () => {
//     const authService = new AuthService()
//     const vitToken = "eyJraWQiOiJyQlJmVm1xc2puIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiYXBwLm1hZXN0cmkiLCJleHAiOjE3MzE4NzQ1MzcsImlhdCI6MTczMTc4ODEzNywic3ViIjoiMDAxODExLjNhOGNmNDU5MGJlZDQwOTE4MWM1NDdhYTkxZjhlMDkzLjA2NTAiLCJjX2hhc2giOiJ2ajhndUc1SGFxb0VTa292UERIalBBIiwiYXV0aF90aW1lIjoxNzMxNzg4MTM3LCJub25jZV9zdXBwb3J0ZWQiOnRydWV9.Fo-0Xpw7p-f9-wVGxQpkkCMIF7F29T0CIo8l9tJzD4oV-jMIQOQHha0APpWWUrzWsKDKLF2J8kZx5FkOwVx5ZXK89QxSipPTcfkbTWiezhW1TD9_UUBtLEcDs9uXt94Iiz2SNnL56wJlNrgB824x1-gF0Osa_t-6D-sP184HdpuzjbhHmlGiPXwLubpuNc7j6mgopPJzDqNsjBQqxmhokVQFlpCJjXwhKjFYvbzB_BKn1W2FGaMwU3O_K928ayrvXLDp6JK1mur37z7tvu3szy1oKfYi-le5SxPadQrXJbIqjyoYu_ObOM0v3KSHGkM3AZYJG5XMc_xPLGlJYtdCFQ"
//
//     const TokenDTO = new Auth.Parameters.AppleToken(vitToken)
//     const AuthFull = await authService.AppleAuth(TokenDTO)
//     console.log(AuthFull)
// })
//
// test("GoogleAuth", async () => {
//     const authService = new AuthService()
//     const evgeniiToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MjA1NzM4NjUwNjAtNTM1cmIxbGZsMmVzZm1jOTVxbHM1dDdxN2hsY2pzMXIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1MjA1NzM4NjUwNjAtYzZ0bGFzazlzM2VpbDlrZXBrcG51bjB2c210aHIyMTkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTA1MTYwMTM1MzIxNTk0MDE3ODMiLCJlbWFpbCI6IjJ4MmdyZWF0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJub25jZSI6IjViNWMzYTQ4NDdjY2NlNzdlYzBiNTQ5YWI1ZGY1YzYzOTc0NWExNGNiMDZmODgzYjEyODUwM2QxOWJjZmY2MTkiLCJuYW1lIjoi0JXQstCz0LXQvdC40Lkg0J_QvtC70LXRidGD0LoiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS1YwSGZSb3J6azNSWHJHaW8xZHc2cU4wa3htR2MycmNIUzRMRmhNSEZ4bFFtRUJITT1zOTYtYyIsImdpdmVuX25hbWUiOiLQldCy0LPQtdC90LjQuSIsImZhbWlseV9uYW1lIjoi0J_QvtC70LXRidGD0LoiLCJpYXQiOjE3MzE4NTMxODIsImV4cCI6MTczMTg1Njc4Mn0.s2767rnjYmtBVvw0iUNuZFAMIQQ3PX95V8s2QWojV1KuAw5vwQH61bCdraCA3r0zpGF8kG8MpXR8pmNCnH-d0D1QWo83uWe_CIbcXQ5-E2l47_DOh2Z-oqX-FpbTIuivdTCi3cTIPxqLi2o1bJLDU8GxVFVxY_utjMnVD6fs-dNoJ02Kzi-Jf-7UrxCL-mQK4ikbPOCK0QV1cf9hRBWT7Wr8kwOxKNrl_fE5YmiZeJH3g9v76D5kLIXExbd8TdDri_G48yXKBNd1W8_mLn5M9iEN-023PLXGxRkOkdfa3PhsYzTG7swORr8fQyZhcJwkuM-X4sgcw3voz4a7WPguNA"
//
//     const TokenDTO = new Auth.Parameters.GoogleToken(evgeniiToken)
//     const AuthFull = await authService.GoogleAuth(TokenDTO)
//     console.log(AuthFull)
// })
