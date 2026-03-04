exports.handler = async (event, context) => {
  // 安全拦截：只允许 POST 请求
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 1. 抓取前端传过来的数据
    const { name, email, message } = JSON.parse(event.body);

    // 2. 呼叫 Resend 的服务器帮你发邮件
    // 这里的 process.env.RESEND_API_KEY 就是我们下一步要配置的环境变量
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Resend 专门用来测试的虚拟发件人
        to: "001231Zhangyongkang@gmail.com", // ⚠️ 你的真实接收邮箱！
        subject: `[Portfolio] Neue Nachricht von ${name}`,
        html: `
          <h3>Du hast eine neue Nachricht über deine Portfolio-Website erhalten!</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <hr/>
          <p><strong>Nachricht:</strong><br/>${message}</p>
        `,
      }),
    });

    // 3. 检查有没有发送失败
    if (!response.ok) {
      const errorData = await response.text();
      console.error("Resend API Error:", errorData);
      return { statusCode: 500, body: "Failed to send email" };
    }

    // 4. 成功后给前端返回 200 OK 信号
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };

  } catch (error) {
    console.error("Server Error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};