import { load } from "cheerio"

async function getProfileWolPictureUrl(url: string) : Promise<string> {
  const htmldata = await fetch(url)
  const htmltext = await htmldata.text()

  const $ = load(htmltext)
  const profileWolPictureUrl : string | undefined = $(".frame__chara__face img").attr("src")

  if (!profileWolPictureUrl) {
    throw new Error("WOL profile picture URL not found, check your URL")
  }

  return profileWolPictureUrl;
}

async function getWolBodyPictureUrl(url: string) : Promise<string> {
  const htmldata = await fetch(url)
  const htmltext = await htmldata.text()

  const $ = load(htmltext)
  const wolBodyPictureUrl : string | undefined = $(".character__detail__image img").attr("src")

  if (!wolBodyPictureUrl) {
    throw new Error("WOL body picture URL not found, check your URL")
  }

  return wolBodyPictureUrl;
}

export { getProfileWolPictureUrl, getWolBodyPictureUrl }