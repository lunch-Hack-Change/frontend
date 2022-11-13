import { Share } from "../../../chat/widgets/share-slice";
import createMockApi from "../../../packages/mock-api-creator";

export const mockGetShares = createMockApi<Share[]>(
  [
    {
      name: 'BTC',
      icon: '/',
      price: '12034.32103$',
      grow: '-13.64%'
    }
  ]
, 100)
