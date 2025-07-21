package main

import (
	"net/http"
	"os"
)

func main() {
	// Serve static files (CSS, images, etc.)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.Handle("/cv/", http.StripPrefix("/cv/", http.FileServer(http.Dir("cv"))))

	// Serve HTML files dynamically
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path
		if path == "/" {
			path = "index.html"
		} else {
			path = path[1:] // e.g. "/cv.html" becomes "cv.html"
		}

		// Check if the file exists
		if _, err := os.Stat(path); os.IsNotExist(err) {
			http.NotFound(w, r)
			return
		}

		http.ServeFile(w, r, path)
	})

	http.ListenAndServe(":8080", nil)

}
