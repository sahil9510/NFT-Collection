// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// BASE URI + TokenID
// BASE URI = https//example.com/
// Token ID = 1

// tokenURI(1) => https://example.com/1

export default function handler(req, res) {
  const tokenId = req.query.tokenId;

  const name = `Crypto Dev #${tokenId}`;
  const description = "CryptoDevs is an NFT Collection for Web3 Developers"
  const image = `https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/${Number(tokenId)-1}.svg`;


  res.status(200).json({
    name,
    description,
    image
  })
}
