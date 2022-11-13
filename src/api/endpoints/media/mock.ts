import createMockApi from "../../../packages/mock-api-creator";

export const mockGetMedia = createMockApi<{media: string}>(
  {
    media: 'https://sun9-65.userapi.com/impf/c840531/v840531534/2bbe2/EwM6R1VT7uc.jpg?size=1280x720&quality=96&sign=36f31d854ba2c8ad708f80a6aa62b0d6&type=album'
  }
, 100)