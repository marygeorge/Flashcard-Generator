
function ClozeCard(fullTxt,partialTxt) 
{
  if(this instanceof ClozeCard) {
    this.fullText=fullTxt;
    this.partial=partialTxt;
    if(fullTxt.indexOf(partialTxt)>=0)
    {   this.cloze=(fullTxt.replace(partialTxt,"___"));         }
    else
    {   throw("'"+partialTxt+"' doesn't appear in '"+ fullTxt+"'");  }
 
} else {
    return new ClozeCard(fullTxt,partialTxt);
  }
}

module.exports= ClozeCard;