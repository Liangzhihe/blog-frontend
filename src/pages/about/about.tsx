const About = () => {

  const m20 = {
    margin: '20px',
  }

  const mb = {
    marginBottom: '16px',
  }

  return (
    <div style={m20}>
      <div style={mb}>知耻近乎勇！</div>
      <div style={mb}>
        <a href="https://github.com/Liangzhihe">
          <img src="https://github-readme-stats.vercel.app/api?username=Liangzhihe&count_private=true&show_icons=true" />
        </a>
      </div>
      <div>
        <a href="https://github.com/Liangzhihe">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Liangzhihe&layout=compact" />
        </a>
      </div>

    </div>
  )
}

export default About
