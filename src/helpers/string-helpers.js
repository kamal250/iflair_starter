export const CleanUrl = (url) => {
    return url.replace(
        new RegExp(
            process.env.GATSBY_WP_BASE_URL,
            "g"
        ),
        ""
    );
}

