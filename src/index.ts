import { load } from "cheerio"

async function getProfileWolPictureUrl(url: string) : Promise<string> {
  const htmldata = await fetch(url)
  const htmltext = await htmldata.text()

  const $ = load(htmltext)
  const profileWolPictureUrl = $(".frame__chara__face img").attr("src")

  if (!profileWolPictureUrl) {
    throw new Error("Profile picture URL not found, check your URL")
  }

  return profileWolPictureUrl;
}