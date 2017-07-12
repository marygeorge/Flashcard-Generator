function BasicCard(question,answer)
{
    if(this instanceof BasicCard)
    {
        this.front=question;
        this.back=answer;
    }
    else
    {  return new BasicCard(question,answer);   }
};

module.exports= BasicCard;