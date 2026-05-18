const { supabase } = require("./supabase");

export const updateViewCount = async (post) => {
    const { data, error } = await supabase
      .from("blog_posts")
      .update({
        view_count: post.view_count + 1,
      })
      .eq("id", post.id);

    if (error) {
      console.error(error);
    }
};