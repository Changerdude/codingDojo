class Project{
    public string ImgSrc{get;set;}
    public string Name{get;set;}
    public string Desc{get;set;}

    public Project(string imgSrc, string name, string desc){
        ImgSrc = imgSrc;
        Name = name;
        Desc = desc;
    }
}